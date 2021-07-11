// Instantiate a new graph
var Graph = function() {
  this.vertices = {}
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if(!this.contains(node)) {
    this.vertices[node] = null;
  }
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices[node] !== undefined;
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)) {
    if(this.vertices[node] === null) {
      delete this.vertices[node];
    } else {
      while(this.vertices[node].removeHead());
      delete this.vertices[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode) && this.vertices[fromNode] !== null) {
    return this.vertices[fromNode].contains(toNode);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.addNode(fromNode);
  this.addNode(toNode);
  if(this.vertices[fromNode] === null) {
    this.vertices[fromNode] = new LinkedList();
  }
  this.vertices[fromNode].addToTail(toNode);
  if(this.vertices[toNode] === null) {
    this.vertices[toNode] = new LinkedList()
  }
  this.vertices[toNode].addToTail(fromNode);
};
//Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var reduceLinkedList = function (oldLS, newLS, targetNode) {
    var headValue = oldLS.removeHead();
    while(headValue !== null) {
      if(headValue !== targetNode) {
         newLS.addToTail(headValue);
      }
      headValue = oldLS.removeHead()
    }
  }
  if(this.hasEdge(fromNode, toNode)) {
    var oldLinkedList = this.vertices[fromNode];
    this.vertices[fromNode] = new LinkedList();
    var newLinkedList = this.vertices[fromNode];
    if(oldLinkedList.head !== null) {
      reduceLinkedList(oldLinkedList, newLinkedList, toNode);
    }
    oldLinkedList = this.vertices[toNode];
    this.vertices[toNode] = new LinkedList();
    var newLinkedList = this.vertices[toNode];
    if(oldLinkedList.head !== null) {
      reduceLinkedList(oldLinkedList, newLinkedList, fromNode);
    }
  }
};
Graph.prototype.forEachNode = function(cb) {
  var forEachEdge = function(node, callback) {
    var element = node.head;
    if(element !== null) {
      if(element.value !== undefined) {
        callback(element.value);
      }
      forEachEdge(node.next, callback);
    }
  }
  for (let key in this.vertices) {
    if(typeof this.vertices[key] === 'LinkedList') {
      forEachEdge(this.vertices[key], cb);
    } else {
      cb(key);
    }
  }
};