///////////TYPE BELOW HERE!

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, new LinkedList());
  }
  this._storage.get(index).addToTail(v);
};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashCell = this._storage.get(index);
  var result = undefined;
  if(hashCell !== undefined) {
    var head = hashCell.head;
    var tail = hashCell.tail;
    if(head === null) {
      result = undefined;
    } else if (head === tail){
      result = head.value;
    } else if(head !== tail && !hashCell.contains(k)) {
      result = tail.value;
    } else {
      if(hashCell.contains(k)) {
        result = k;
      }
    }
  }
  return result;
};
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  delete this._storage.get(index);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


