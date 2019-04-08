// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    let str = '[';
    obj.forEach(function(element, idx) {
      if (idx === obj.length - 1) {
        str += stringifyJSON(element);
      } else {
        str += stringifyJSON(element) + ',';
      }
    });
    return str + ']';
  } else if (typeof obj === 'object') {
    let str = '{';
    let size = Object.keys(obj).length - 1;
    for (let keys in obj) {
      let val = stringifyJSON(obj[keys]);
      if (val !== '') {
        if (size === 0) {
          str += '"' + keys + '":' + val;
        } else {
          str += '"' + keys + '":' + val + ',';
        }
      size--;
      }
    }
    return str + '}';
  } else {
    return '';
  }
};