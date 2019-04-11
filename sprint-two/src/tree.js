var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
    // fix me
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  var checker = function(tree) {
    if (tree.value === target) {
      result = true;
    } else {
      _.each(tree.children, checker);
    }
  };
  checker(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild() - constant O(1) time complexity
 contains() - linear O(n) time complexity
 */
