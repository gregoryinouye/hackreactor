// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*

getElementsByClassName returns array-like HTMLCollection of elements
document.body -> returns body node of the current document
element.childNodes -> returns live NodeList of child nodes of given element
element.classList -> returns live DOMTokenList of class attributes of the element

*/

var getElementsByClassName = function(className) {
  var output = [];
  var node = arguments.length === 1 ? document.body : arguments[1];
  if (Array.from(node.classList).includes(className)) {
    output = output.concat(node);
  }
  if (node.hasChildNodes()) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeName !== '#text') {
        output = output.concat(getElementsByClassName(className, node.childNodes[i]));
      }
    }
  }
  return output;
};