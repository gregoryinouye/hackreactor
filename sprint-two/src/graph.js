

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {'value': node, 'edges': []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var graph = this;
  this.forEachNode(function(nodeName) {
    if (graph[nodeName].edges.indexOf(node) >= 0) {
      graph[nodeName].edges.splice(graph[nodeName].edges.indexOf(node), 1);
    }
  });
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.some(this[fromNode].edges, function(element) {
    return element === toNode;
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].edges.splice(this[fromNode].edges.indexOf(toNode), 1);
  this[toNode].edges.splice(this[toNode].edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.forEach(Object.keys(this), cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


