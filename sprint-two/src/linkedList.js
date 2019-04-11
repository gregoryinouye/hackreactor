var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    list.tail === null ? list.head = newTail : list.tail.next = newTail;
    list.tail = newTail;
  };

  list.removeHead = function() {
    // edge case: if only one item in list (tail = head), need to update list.tail
    if (list.head === null) {
      return null;
    }
    var currentHead = list.head;
    list.head = currentHead.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var checker = function(node) {
      if (node === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
      return checker(node.next);
      }
    };
    return checker(list.head);
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
