var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
    // fix me
  Object.assign(newTree, treeMethods);
  newTree.children = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.children === null) {
    this.children = [];
  }
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let findValue = function(tree, target) {
    let result = false;
    if (tree.value === target) {
      result = true;
    } else if (tree.children !== null){
        for (let i = 0; i < tree.children.length; i++) {
           result = result || findValue(tree.children[i], target);
        }
    }
    return result;
  }
  return findValue(this, target);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
