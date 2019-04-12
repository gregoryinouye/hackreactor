

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageBucket = this._storage.get(index);
  if (storageBucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else if (_.some(storageBucket, function(element) {
    return element[0] === k;
  })) {
    storageBucket.forEach(function(element, index) {
      if (element[0] === k) {
        element[1] = v;
      }
    });
  } else {
    storageBucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageBucket = this._storage.get(index);
  //return storageBucket.filter(function(element) {
  //  return element[0] === k;
  //})[1];
  for (var i = 0; i < storageBucket.length; i++) {
    if (storageBucket[i][0] === k) {
      return storageBucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageBucket = this._storage.get(index);
  
  for (var i = 0; i < storageBucket.length; i++) {
    if (storageBucket[i][0] === k) {
      storageBucket.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert() - linear O(n)
 retrieve() - constant O(1)
 remove() - linear O(n)
 */


