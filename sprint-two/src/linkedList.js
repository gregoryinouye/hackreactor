var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    list[value] = newTail;
    if (list.tail === null) {
      list.tail = newTail;
      list.head = newTail;
    } else {
      list.tail = newTail;
      list[list.tail.value].next = newTail;
    }
  };

  list.removeHead = function() {
    debugger;
    if (list.head === null) {
      return null;
    }
    var currentHead = list.head;
    delete list[currentHead.value];
    list.head = currentHead.next;
    return currentHead;
  };

  list.contains = function(target) {
    
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
