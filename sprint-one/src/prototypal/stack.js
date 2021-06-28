var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.indexCount = -1;
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
  let lastElement = this.storage[this.indexCount];
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



