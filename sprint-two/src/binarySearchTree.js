var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  newTree.left = null;
  newTree.right = null;
  
  for (var key in binaryTreeMethods) {
    newTree[key] = binaryTreeMethods[key];
  }
  
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  // recursive case - there is a child in target direction
  
};

binaryTreeMethods.contains = function(target) {
  // recursive - current node !== target, has child in target direction
  
  
  // base case is current node === target
  
  
  // base !== target but there are no children
  
};

binaryTreeMethods.depthFirstLog = function(node, cb) {
  cb(node.value);
  if (node.left !== null) {
    this.depthFirstLog(node.left, cb);
  }
  if (node.right !== null) {
    this.depthFirstLog(node.right, cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
