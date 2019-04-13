

var HashTable = function(limit = 8) {
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  this.isResizing = false;
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageBucket = this._storage.get(index);
  if (storageBucket === undefined) {
    this._storage.set(index, [[k, v]]);
    this._counter++;
    this.resizeChecker();
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
  if (storageBucket === undefined) {
    return undefined;
  }
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
      if (storageBucket.length === 0) {
        this._counter--;
        this.resizeChecker();
      }
      break;
    }
  }
};

HashTable.prototype.resizeChecker = function() {
  if (this.isResizing) {
    return;
  } else if (this._counter < (.25 * this._limit)) {
    this.resizer(this._limit / 2);
  } else if (this._counter >= (.75 * this._limit)) {
    this.resizer(this._limit * 2);
  }
};

HashTable.prototype.resizer = function(newLimit) {
  var tempStorage = [];
  debugger;
  this._storage.each(function(element) {
    if (element !== undefined) {
      tempStorage = tempStorage.concat(element);
    }
  });
  this._limit = newLimit;
  this._counter = 0;
  this._storage = LimitedArray(newLimit);
  this.isResizing = true;
  
  for (var i = 0; i < tempStorage.length; i++) {
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }
  
  this.isResizing = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert() - linear O(n)
 retrieve() - constant O(1)
 remove() - linear O(n)
 */


