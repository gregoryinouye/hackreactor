var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newHead = Node(value);
    var oldHead = list.head;
    if (this.head !== null) {
      this.head = newHead;
      oldHead.previous = newHead;
      newHead.next = oldHead;
    } else {
      this.head = newHead;
      this.tail = newHead;
    }
  };

  list.addToTail = function(value) {
    var newTail = Node(value);
    var oldTail = list.tail;
    if (this.tail !== null) {
      this.tail = newTail;
      oldTail.next = newTail;
      newTail.previous = oldTail;
    } else {
      this.head = newTail;
      this.tail = newTail;
    }
  };

  list.removeHead = function() {
    var currentHead = list.head;
    if (list.head === null) {
      return null;
    } else if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return currentHead.value;
    } else {
      list.head = list.head.next;
      list.head.previous = null;
      return currentHead.value;
    }
  };
  
  list.removeTail = function() {
    var currentTail = list.tail;
    if (list.tail === null) {
      return null;
    } else if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return currentTail.value;
    } else {
      list.tail = list.tail.previous;
      list.tail.next = null;
      return currentHead.value;
    }
  };

  list.contains = function(target) {
    var result = false;
    var recursiveChecker = function(node) {
      if (node.value === target) {
        result = true;
        return;
      } else if (node.next === null) {
        return;
      } else {
        recursiveChecker(node.next);
      }
    };
    recursiveChecker(list.head);
    return result;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
