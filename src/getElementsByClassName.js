// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*

The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names

document.body -> returns body node of the current document
element.childNodes -> returns live NodeList of child nodes of given element
element.classList -> returns live DOMTokenList of class attributes of the element

getElementsByClassName returns array-like HTMLCollection of elements
document.appendChild(element)

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

// if (currentValue.hasChildNodes()) {
//   return Array.from(currentValue.classList).includes(className) ? [currentValue.nodeName].push(getClassChildren(currentValue)) : getClassChildren(currentValue);
// } else {
//   return Array.from(currentValue.classList).includes(className) ? currentValue.nodeName : undefined;
// }}

// get document.body
// check if there are children nodes, if child node exists, run recusive case
// if no child nodes, run end case
// for each element, search all child elements for specified class
// return all elements belonging to specified class
// write returns togther for final output

// NodeList.item()
// Returns an item in the list by its index, or null if the index is out-of-bounds.
// An alternative to accessing nodeList[i] (which instead returns  undefined when i is out-of-bounds). This is mostly useful for non-JavaScript languages DOM implementations.
// NodeList.entries()
// Returns an iterator, allowing code to go through all key/value pairs contained in the collection. (In this case, the keys are numbers starting from 0 and the values are nodes.)
// NodeList.forEach()
// Executes a provided function once per NodeList element, passing the element as an argument to the function.
// NodeList.keys()
// Returns an iterator, allowing code to go through all the keys of the key/value pairs contained in the collection. (In this case, the keys are numbers starting from 0.)
// NodeList.values()
// Returns an iterator allowing code to go through all values (nodes) of the key/value pairs contained in the collection.

//element.classList
// add( String [, String [, ...]] )
// Adds the specified class values. If these classes already exist in the element's class attribute they are ignored.
// remove( String [, String [, ...]] )
// Removes the specified class values.
// Note: Removing a class that does not exist does NOT throw an error.
// item( Number )
// Returns the class value by index in the collection.
// toggle( String [, force] )
// When only one argument is present: Toggle the class value; i.e., if the class exists then remove it and return false, if not, then add it and return true.
// When a second argument is present: If the second argument evaluates to true, add the specified class value, and if it evaluates to false, remove it.
// contains( String )
// Checks if the specified class value exists in the element's class attribute.
// replace( oldClass, newClass )
// Replaces an existing class with a new class.