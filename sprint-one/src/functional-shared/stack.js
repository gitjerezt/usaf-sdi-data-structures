var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    indexCount: -1
  };
  Object.assign(instance, stackMethods);
  return instance;
};

var stackMethods = {};
stackMethods.push = function (value) {
  this.indexCount++;
  this.storage[this.indexCount] = value;
};
stackMethods.pop = function () {
  if (this.indexCount === -1) {
    return;
  }
  var lastElement = this.storage[this.indexCount];
  delete this.storage[this.indexCount];
  this.indexCount--;
  return lastElement;
};
stackMethods.size = function () {
  if (this.indexCount === -1) {
    return 0;
  }
  return this.indexCount + 1;
};

