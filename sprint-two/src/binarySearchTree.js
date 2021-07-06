var BinarySearchTree = function(value) {
  //TODO: IMPLEMENT THE ABOVE METHODS ON THE BST CLASS
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  Object.assign(bst, bstMethods);
  return bst;
};
var bstMethods = {};
bstMethods.insert = function(value) {
  var insertAtNode = function(node, value) {
    if(node === null) {
      node =  new BinarySearchTree(value);
    } else if (value <= node.value) {
      node.left = insertAtNode(node.left, value);
    } else {
      node.right = insertAtNode(node.right,value);
    }
    return node;
  }
  insertAtNode(this, value);
}
bstMethods.contains = function(value) {
  var containsAtNode = function (node, value) {
    var result = false
    if (node === null){
      result = false;
    } else if (node.value === value) {
      result = true;
    } else if (value <= node.value) {
      result = result || containsAtNode(node.left, value);
    } else if (value > node.value){
      result = result || containsAtNode(node.right, value);
    }  else {
      result = false;
    }
    return result;
  }
  return containsAtNode(this, value);
}
bstMethods.depthFirstLog = function(callback) {
  var executeCallBack = function (node, callback){
    if (node === null){
      return;
    } else if (node.value) {
      callback(node.value);
    }
    executeCallBack(node.left, callback);
    executeCallBack(node.right, callback);
  }
  executeCallBack(this, callback);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
