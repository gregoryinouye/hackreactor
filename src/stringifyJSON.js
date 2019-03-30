// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// object: stringifyObject,
// array: stringifyArray,
// function: undefined,
// symbol: undefined,
// undefined: undefined
// string: return "string"
// boolean: toString
// number: toString (EXCEPT Infinity, NaN)
// null: typeof object --> return 'null'

/*

If the value has a toJSON() method, it's responsible to define what data will be serialized.
Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.
If undefined, a Function, or a Symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify() can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
All Symbol-keyed properties will be completely ignored, even when using the replacer function.
The instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()). Thus, they are treated as strings.
The numbers Infinity and NaN, as well as the value null, are all considered null.
All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their enumerable properties serialized.

*/

var stringifyJSON = function(obj) {
  if (obj === null || obj === Infinity || obj === NaN) {
  	return 'null';
  } else if (Array.isArray(obj)) {
  	return stringifyArray(obj);
  } else if (typeof obj === 'object') {
    return stringifyObject(obj);
  } else if (['boolean', 'number'].includes(typeof obj)) {
  	return obj.toString();
  } else if (typeof obj === 'string') {
  	return `\"${obj}\"`;
  } else if (['function', 'symbol', 'undefined'].includes(typeof obj)) {
  	return undefined;
  }
};

var stringifyObject = function(obj) {
  var objProps = Object.entries(obj);
  return objProps.reduce(function(output, currentValue, currentIndex) {
  	if (currentIndex === 0) {
  		return output + currentValue[0] + ":" + stringifyJSON(currentValue);
  	} else {
  		return output + ',' + currentValue[0] + ":" + stringifyJSON(currentValue);
  	}
  }, '{') + '}';
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