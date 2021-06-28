class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.indexCount = -1;
  }
  push(value) {
    this.indexCount++;
    this.storage[this.indexCount] = value;
  }
  pop() {
    if (this.indexCount === -1) {
      return;
    }
    let lastElement = this.storage[this.indexCount];
    delete this.storage[this.indexCount];
    this.indexCount--;
    return lastElement;
  }
  size() {
    if (this.indexCount === -1) {
      return 0;
    }
    return this.indexCount + 1;
  }
}