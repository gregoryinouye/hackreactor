// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*

The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.

*/

var getElementsByClassName = function(className) {
  return document.all;
};

// get all elements of document in array
// for each element, search all child elements for specified class
// return all elements belonging to specified class
// write returns togther for final output