var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.indexCount = -1;
};
Queue.prototype.enqueue = function (value) {
  this.indexCount++;
  this.storage[this.indexCount] = value;
};
Queue.prototype.dequeue = function () {
  if (this.indexCount === -1) {
    return;
  }
  let firstElement = this.storage[0];
  delete this.storage[0];
  let index = 0
  for (let key in this.storage) {
    this.storage[index] = this.storage[key];
    index++;
  }
  delete this.storage[this.indexCount];
  this.indexCount--;
  return firstElement;
};
Queue.prototype.size = function () {
  if (this.indexCount === -1) {
    return 0;
  }
  return this.indexCount + 1;
};


