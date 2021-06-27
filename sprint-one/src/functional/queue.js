var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexCount = -1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (indexCount === -1) {
      indexCount = 0;
    } else {
      indexCount++;
    }
    storage[indexCount] = value;
  };

  someInstance.dequeue = function() {
    if (indexCount === -1) {
      return;
    }
    var firstElement = storage[0];
    delete storage[0];
    var storageValues = Object.values(storage);
    var index = 0;
    for (var key in storage) {
      storage[index] = storage[key];
      index++;
    }
    delete storage[indexCount];
    indexCount--;
    return firstElement;
  };

  someInstance.size = function() {
    if (indexCount === -1) {
      return 0;
    }
    return indexCount + 1;
  };

  return someInstance;
};
