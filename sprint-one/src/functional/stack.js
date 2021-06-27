var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexCount = -1;

  // Implement the methods below
  someInstance.push = function(value) {
    if (indexCount === -1 ){
      indexCount = 0;
    } else {
      indexCount++;
    }
    storage[indexCount] = value;
  };

  someInstance.pop = function() {
    if (indexCount === -1) {
      return;
    }
    var lastElement = storage[indexCount];
    delete storage.indexCount;
    indexCount--;
    return lastElement;
  };

  someInstance.size = function() {
    return indexCount + 1;
  };

  return someInstance;
};
