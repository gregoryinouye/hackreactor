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

binaryTreeMethods.insert = function(value, node = this) {
  if (node.value > value) {
    node.left === null ? node.left = BinarySearchTree(value) : node.insert(value, node.left);
  } else if (node.value < value) {
    node.right === null ? node.right = BinarySearchTree(value) : node.insert(value, node.right);
  }
  // recursive case - there is a child in target direction
  // base case - there is no child in target direction
     // add newtree to target direction
  
};

binaryTreeMethods.contains = function(target) {
  var result = false;
  
  this.depthFirstLog(function(value) {
    if (target === value) {
      result = true;
    }
  });
  
  return result;
  
  
  
  // recursive - current node !== target, has child in target direction
  
  
  // base case is current node === target
  
  
  // base !== target but there are no children
  
};

binaryTreeMethods.depthFirstLog = function(cb, node = this) {
  cb(node.value);
  if (node.left !== null) {
    this.depthFirstLog(cb, node.left);
  }
  if (node.right !== null) {
    this.depthFirstLog(cb, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
