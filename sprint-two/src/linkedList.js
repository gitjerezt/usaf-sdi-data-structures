var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var firstElement = list.head;
    list.head = list.head.next;
    return firstElement.value;
  };

  list.contains = function(target) {
    var element = list.head;
    while (element !== null) {
      if (element.value === target) {
        return true;
      }
      element = element.next;
    }
    return false;
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
