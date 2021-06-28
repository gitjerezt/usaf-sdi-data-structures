  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // let instance = Object.create(Stack.prototype);
  // instance.storage = {};
  // instance.indexCount = -1;
  // return instance;

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.indexCount = -1;
};
Stack.prototype.push = function (value) {
  this.indexCount++;
  this.storage[this.indexCount] = value;
};
Stack.prototype.pop = function () {
  if (this.indexCount === -1) {
    return;
  }
  var lastElement = this.storage[this.indexCount];
  delete this.storage[this.indexCount];
  this.indexCount--;
  return lastElement;
};
Stack.prototype.size = function () {
  if (this.indexCount === -1) {
    return 0;
  }
  return this.indexCount + 1;
};



