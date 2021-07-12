var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage === null) {
    this._storage = {};
  }
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  for (let key in this._storage) {
    if(this._storage[key].normalize() === item.normalize()) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if(this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
