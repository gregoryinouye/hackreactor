var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.index = 0;

  list.addToTail = function(value) {
    var newTail = Node(value);
    newTail.index = list.index;
    list[list.index] = newTail;
    list.tail === null ? list.head = newTail : list[list.tail.index].next = newTail;
    list.tail = newTail;
    list.index++;
  };

  list.removeHead = function() {
    // edge case: if only one item in list (tail = head), need to update list.tail
    // if (list.head === null) {
    //   return null;
    // }
    var currentHead = list.head;
    delete list[currentHead.index];
    list.head = currentHead.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    let keyList = Object.keys(list);
    indexOnlyList = keyList.filter(function(element) {
      return typeof element === 'number';
    });
    return _.some(indexOnlyList, function(element) {
      return list[element].value === target;
    });
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.index = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
